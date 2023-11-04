import CircularProgress from "@mui/material/CircularProgress";

export function PageLoader() {
  return (
    <div className="flex min-h-screen grow items-center justify-center">
      <CircularProgress size="3.5rem" />
    </div>
  );
}
