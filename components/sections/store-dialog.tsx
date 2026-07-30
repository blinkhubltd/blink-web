import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DeliveryBadge } from "@/components/blink/delivery-badge";
import { StoreBadge } from "@/components/blink/store-badge";

/** Shown from every commercial CTA on the site — Blink does not sell on the
 * web, so this is where every "Get the app" / "Shop in the app" hands off. */
export function StoreDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[470px] p-7">
        <DialogHeader>
          <DialogTitle className="blink-display-3 text-2xl">
            Blink lives in the app
          </DialogTitle>
          <DialogDescription className="text-[15px] leading-[1.55] text-[var(--text-muted)]">
            Shopping, payment and tracking all happen in the Blink app. Grab it
            and your first order is 10 minutes away.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-start gap-4">
          <DeliveryBadge />
          <div className="flex flex-wrap gap-3">
            <StoreBadge store="ios" />
            <StoreBadge store="android" />
          </div>
          <span className="text-[13px] text-[var(--text-muted)]">
            Available on iOS 15+ and Android 9+.
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
