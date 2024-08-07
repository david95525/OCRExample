import BarcodeFormat from '../BarcodeFormat';
import BitMatrix from '../common/BitMatrix';
import DecodeHintType from '../DecodeHintType';
import NotFoundException from '../NotFoundException';
import Result from '../Result';
import ResultMetadataType from '../ResultMetadataType';
import System from '../util/System';
import Decoder from './decoder/Decoder';
import Detector from './detector/Detector';
/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This implementation can detect and decode Data Matrix codes in an image.
 *
 * @author bbrown@google.com (Brian Brown)
 */
var DataMatrixReader = /** @class */ (function () {
    function DataMatrixReader() {
        this.decoder = new Decoder();
    }
    /**
     * Locates and decodes a Data Matrix code in an image.
     *
     * @return a String representing the content encoded by the Data Matrix code
     * @throws NotFoundException if a Data Matrix code cannot be found
     * @throws FormatException if a Data Matrix code cannot be decoded
     * @throws ChecksumException if error correction fails
     */
    // @Override
    // public Result decode(BinaryBitmap image) throws NotFoundException, ChecksumException, FormatException {
    //   return decode(image, null);
    // }
    // @Override
    DataMatrixReader.prototype.decode = function (image, hints) {
        if (hints === void 0) { hints = null; }
        var decoderResult;
        var points;
        if (hints != null && hints.has(DecodeHintType.PURE_BARCODE)) {
            var bits = DataMatrixReader.extractPureBits(image.getBlackMatrix());
            decoderResult = this.decoder.decode(bits);
            points = DataMatrixReader.NO_POINTS;
        }
        else {
            var detectorResult = new Detector(image.getBlackMatrix()).detect();
            decoderResult = this.decoder.decode(detectorResult.getBits());
            points = detectorResult.getPoints();
        }
        var rawBytes = decoderResult.getRawBytes();
        var result = new Result(decoderResult.getText(), rawBytes, 8 * rawBytes.length, points, BarcodeFormat.DATA_MATRIX, System.currentTimeMillis());
        var byteSegments = decoderResult.getByteSegments();
        if (byteSegments != null) {
            result.putMetadata(ResultMetadataType.BYTE_SEGMENTS, byteSegments);
        }
        var ecLevel = decoderResult.getECLevel();
        if (ecLevel != null) {
            result.putMetadata(ResultMetadataType.ERROR_CORRECTION_LEVEL, ecLevel);
        }
        return result;
    };
    // @Override
    DataMatrixReader.prototype.reset = function () {
        // do nothing
    };
    /**
     * This method detects a code in a "pure" image -- that is, pure monochrome image
     * which contains only an unrotated, unskewed, image of a code, with some white border
     * around it. This is a specialized method that works exceptionally fast in this special
     * case.
     *
     * @see com.google.zxing.qrcode.QRCodeReader#extractPureBits(BitMatrix)
     */
    DataMatrixReader.extractPureBits = function (image) {
        var leftTopBlack = image.getTopLeftOnBit();
        var rightBottomBlack = image.getBottomRightOnBit();
        if (leftTopBlack == null || rightBottomBlack == null) {
            throw new NotFoundException();
        }
        var moduleSize = this.moduleSize(leftTopBlack, image);
        var top = leftTopBlack[1];
        var bottom = rightBottomBlack[1];
        var left = leftTopBlack[0];
        var right = rightBottomBlack[0];
        var matrixWidth = (right - left + 1) / moduleSize;
        var matrixHeight = (bottom - top + 1) / moduleSize;
        if (matrixWidth <= 0 || matrixHeight <= 0) {
            throw new NotFoundException();
        }
        // Push in the "border" by half the module width so that we start
        // sampling in the middle of the module. Just in case the image is a
        // little off, this will help recover.
        var nudge = moduleSize / 2;
        top += nudge;
        left += nudge;
        // Now just read off the bits
        var bits = new BitMatrix(matrixWidth, matrixHeight);
        for (var y = 0; y < matrixHeight; y++) {
            var iOffset = top + y * moduleSize;
            for (var x = 0; x < matrixWidth; x++) {
                if (image.get(left + x * moduleSize, iOffset)) {
                    bits.set(x, y);
                }
            }
        }
        return bits;
    };
    DataMatrixReader.moduleSize = function (leftTopBlack, image) {
        var width = image.getWidth();
        var x = leftTopBlack[0];
        var y = leftTopBlack[1];
        while (x < width && image.get(x, y)) {
            x++;
        }
        if (x === width) {
            throw new NotFoundException();
        }
        var moduleSize = x - leftTopBlack[0];
        if (moduleSize === 0) {
            throw new NotFoundException();
        }
        return moduleSize;
    };
    DataMatrixReader.NO_POINTS = [];
    return DataMatrixReader;
}());
export default DataMatrixReader;
