import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearToast, hideToast } from "../../features/app/ui/toast/toastSlice.js";

function Toast() {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector((state) => state.toast);

  useEffect(() => {
    if (!open) return undefined;

    const timeout = window.setTimeout(() => {
      dispatch(hideToast());
      dispatch(clearToast());
    }, 3000);

    return () => window.clearTimeout(timeout);
  }, [dispatch, open, message, severity]);

  if (!open || !message) return null;

  const severityStyles = {
    success: "border-emerald-500/30 text-emerald-400",
    warning: "border-amber-500/30 text-amber-400",
    error: "border-rose-500/30 text-rose-400",
    info: "border-primary/30 text-primary",
  };
  const style = severityStyles[severity] ?? severityStyles.info;

  const closeToast = () => {
    dispatch(hideToast());
    dispatch(clearToast());
  };

  return (
    <div
      role={severity === "error" ? "alert" : "status"}
      className={`fixed right-6 top-6 z-[99999] flex items-center gap-3 rounded-2xl border bg-bg-surface/90 px-5 py-3.5 text-sm font-medium shadow-2xl backdrop-blur-md transition-all sm:text-base ${style}`}
    >
      <span>{message}</span>
      <button
        type="button"
        aria-label="Close notification"
        onClick={closeToast}
        className="rounded p-1 text-current hover:bg-bg-hover"
      >
        ×
      </button>
    </div>
  );
}

export default Toast;
