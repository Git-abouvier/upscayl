type CompressionInputProps = {
  compression: number;
  handleCompressionChange: (arg: any) => void;
};

export function CompressionInput({
  compression,
  handleCompressionChange,
}: CompressionInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 text-sm font-medium uppercase">
        <p className="shrink-0">Image Compression ({compression}%)</p>
      </div>
      {compression > 0 && (
        <p className="text-xs text-base-content/80">
          PNG compression is not supported at the moment.
        </p>
      )}
      <input
        type="range"
        placeholder="Type here"
        className="range range-primary w-full max-w-xs"
        min={0}
        max={100}
        value={compression}
        onChange={handleCompressionChange}
      />
    </div>
  );
}
