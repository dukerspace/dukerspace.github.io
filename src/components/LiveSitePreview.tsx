import React from 'react'

type LiveSitePreviewProps = {
  src: string
  title: string
  className?: string
  /** When false, clicks pass through to a parent link (project cards). */
  interactive?: boolean
}

/**
 * Embeds a live site at ~4× container width (desktop viewport), then scales
 * down so the preview fits without switching to a mobile layout.
 */
const LiveSitePreview: React.FC<LiveSitePreviewProps> = ({
  src,
  title,
  className = '',
  interactive = false,
}) => (
  <div
    className={`relative aspect-video w-full overflow-hidden bg-[#0b1020] ${className}`}
  >
    <iframe
      src={src}
      title={title}
      loading="lazy"
      referrerPolicy="no-referrer"
      className={[
        'absolute left-0 top-0 h-[400%] w-[400%] origin-top-left scale-[0.25] border-0',
        interactive ? '' : 'pointer-events-none',
      ].join(' ')}
    />
  </div>
)

export default LiveSitePreview
