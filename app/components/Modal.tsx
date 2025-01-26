import {
  Content as DialogContent,
  Overlay as DialogOverlayComponent,
  Portal as DialogPortal,
  Root as Dialog,
  Title as DialogTitle,
} from "@radix-ui/react-dialog";
import clsx from "clsx";
import React from "react";

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogOverlayComponent>,
  React.ComponentPropsWithoutRef<typeof DialogOverlayComponent>
>(({ className, ...props }, ref) => (
  <DialogOverlayComponent
    ref={ref}
    className={clsx(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    )}
    {...props}
  />
));
DialogOverlay.displayName = "DialogOverlay";

type ModalProps = {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export const Modal = ({
  isOpen,
  header,
  children,
  footer,
  onClose,
  className,
}: ModalProps) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogPortal>
      <DialogOverlay>
        <DialogContent
          className={clsx(
            "fixed left-1/2 top-1/2 z-50 flex flex-col w-full max-w-[544px] rounded transform -translate-x-1/2 -translate-y-1/2 border bg-white shadow-lg duration-200 [data-state=open]:animate-in [data-state=closed]:animate-out [data-state=closed]:fade-out-0 [data-state=open]:fade-in-0 [data-state=closed]:zoom-out-95 [data-state=open]:zoom-in-95",
            "w-full max-h-[90vh] overflow-hidden",
            className
          )}
        >
          <DialogTitle className="flex items-start justify-between">
            {header && <>{header}</>}
          </DialogTitle>
          <div className="flex-auto overflow-auto">{children}</div>
          {footer && <footer>{footer}</footer>}
        </DialogContent>
      </DialogOverlay>
    </DialogPortal>
  </Dialog>
);

Modal.displayName = "Modal";
