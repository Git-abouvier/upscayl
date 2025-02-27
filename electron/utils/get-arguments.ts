import { getPlatform } from "./get-device-specs";
import { ImageFormat } from "./types";
const slash: string = getPlatform() === "win" ? "\\" : "/";

export const getSingleImageArguments = ({
  inputDir,
  fullfileName,
  outFile,
  modelsPath,
  model,
  scale,
  gpuId,
  saveImageAs,
  customWidth,
}: {
  inputDir: string;
  fullfileName: string;
  outFile: string;
  modelsPath: string;
  model: string;
  scale: any;
  gpuId: string;
  saveImageAs: ImageFormat;
  customWidth: string;
}) => {
  return [
    "-i",
    inputDir + slash + fullfileName,
    "-o",
    outFile,
    "-s",
    scale,
    "-m",
    modelsPath,
    "-n",
    model,
    gpuId ? "-g" : "",
    gpuId ? gpuId : "",
    "-f",
    saveImageAs,
    customWidth ? `-w ${customWidth}` : "",
  ];
};

export const getDoubleUpscaleArguments = ({
  inputDir,
  fullfileName,
  outFile,
  modelsPath,
  model,
  gpuId,
  saveImageAs,
  scale,
}: {
  inputDir: string;
  fullfileName: string;
  outFile: string;
  modelsPath: string;
  model: string;
  gpuId: string;
  saveImageAs: ImageFormat;
  scale: string;
}) => {
  return [
    "-i",
    inputDir + slash + fullfileName,
    "-o",
    outFile,
    "-s",
    scale,
    "-m",
    modelsPath,
    "-n",
    model,
    gpuId ? "-g" : "",
    gpuId ? gpuId : "",
    "-f",
    saveImageAs,
  ];
};

export const getDoubleUpscaleSecondPassArguments = ({
  isAlpha,
  outFile,
  modelsPath,
  model,
  gpuId,
  saveImageAs,
  scale,
  customWidth,
}: {
  isAlpha: boolean;
  outFile: string;
  modelsPath: string;
  model: string;
  gpuId: string;
  saveImageAs: ImageFormat;
  scale: string;
  customWidth: string;
}) => {
  return [
    "-i",
    isAlpha ? outFile + ".png" : outFile,
    "-o",
    isAlpha ? outFile + ".png" : outFile,
    "-s",
    scale,
    "-m",
    modelsPath,
    "-n",
    model,
    gpuId ? "-g" : "",
    gpuId ? gpuId : "",
    isAlpha ? "" : "-f",
    isAlpha ? "" : saveImageAs,
    customWidth ? `-w ${customWidth}` : "",
  ];
};

export const getBatchArguments = ({
  inputDir,
  outputDir,
  modelsPath,
  model,
  gpuId,
  saveImageAs,
  scale,
  customWidth,
}: {
  inputDir: string;
  outputDir: string;
  modelsPath: string;
  model: string;
  gpuId: string;
  saveImageAs: ImageFormat;
  scale: string;
  customWidth: string;
}) => {
  return [
    "-i",
    inputDir,
    "-o",
    outputDir,
    "-s",
    scale,
    "-m",
    modelsPath,
    "-n",
    model,
    gpuId ? "-g" : "",
    gpuId ? gpuId : "",
    "-f",
    saveImageAs,
    customWidth ? `-w ${customWidth}` : "",
  ];
};
