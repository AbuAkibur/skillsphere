export default function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeMap = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`${sizeMap[size]} border-[#FF6B00]/20 border-t-[#FF6B00] rounded-full animate-spin`}
        style={{ borderWidth: size === "sm" ? 2 : size === "md" ? 3 : 4 }}
      />
      {size !== "sm" && (
        <p className="text-sm text-gray-500 font-medium">Loading...</p>
      )}
    </div>
  );
}
