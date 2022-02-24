enum Var {
  "X",
}

export const Worksheet = () => {
  const time = 1;
  const rate = 0.07 * Var.X;
  const principle = 18500;
  const interest = principle * rate * time;

  const account01 = 0.07 + Var.X;
  const account02 = 0.03 * (18500 - Var.X);
  const total = account01 + account02;

  return (
    <div>
      <p>Hello World</p>
      <p>This is the work sheet here</p>
    </div>
  );
};
