import React, { useEffect, useId, useRef } from 'react';
import './styles/WorksModal.css';

function getFocusableElements(root) {
  if (!root) return [];
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ];
  return Array.from(root.querySelectorAll(selectors.join(','))).filter(
    (el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
  );
}

export default function WorksModal({ isOpen, title, onClose, children }) {
  const titleId = useId();
  const modalRef = useRef(null);
  const lastActiveElementRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    lastActiveElementRef.current = document.activeElement;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose?.();
      }

      if (e.key !== 'Tab') return;
      const focusables = getFocusableElements(modalRef.current);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const isShift = e.shiftKey;

      if (isShift && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!isShift && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    // Delay focus until after paint.
    const t = window.setTimeout(() => {
      const focusables = getFocusableElements(modalRef.current);
      (focusables[0] || modalRef.current)?.focus?.();
    }, 0);

    return () => {
      window.clearTimeout(t);
      document.removeEventListener('keydown', onKeyDown);
      // Restore focus to the previously active element.
      const el = lastActiveElementRef.current;
      if (el && typeof el.focus === 'function') el.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="works-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="works-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={modalRef}
        tabIndex={-1}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="works-modal-header">
          <div>
            <div className="works-modal-kicker">Details</div>
            <h3 className="works-modal-title" id={titleId}>
              {title}
            </h3>
          </div>
          <button type="button" className="works-modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="works-modal-body">{children}</div>
      </div>
    </div>
  );
}

