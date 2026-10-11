/**
 * Decorative CSS refrigerator. The door opens as the page scrolls (see
 * globals.css); without scroll-driven animation support or with reduced motion
 * it stays slightly ajar. Replace with a next/image product render when the
 * client supplies photography.
 */
export function HeroFridge() {
  return (
    <div className="fridge-scene flex justify-center">
      <div
        className="fridge"
        role="img"
        aria-label="Illustration of a premium refrigerator with its door opening to reveal a bright interior"
      >
        <div className="fridge-interior" />
        <div className="fridge-door">
          <div className="fridge-split" />
          <div className="fridge-handle" />
        </div>
      </div>
    </div>
  );
}
