export default function LogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hexagon (beehive shape) */}
      <path
        d="M20 2L35.32 11V29L20 38L4.68 29V11L20 2Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Soccer ball center */}
      <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="1.8" fill="none" />
      {/* Pentagon pattern lines */}
      <path
        d="M20 13L20 15.5M20 24.5L20 27M13.5 17.5L15.5 18.5M24.5 21.5L26.5 22.5M13.5 22.5L15.5 21.5M24.5 18.5L26.5 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Small hex cells (beehive detail) */}
      <path
        d="M20 5.5L23 7.5V10.5L20 12.5L17 10.5V7.5L20 5.5Z"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M20 27.5L23 29.5V32.5L20 34.5L17 32.5V29.5L20 27.5Z"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  );
}
