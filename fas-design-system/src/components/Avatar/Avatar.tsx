/**
 * Avatar — FAS Design Kit
 */
import React from 'react';
import './Avatar.css';

export type AvatarType = 'primary' | 'secondary' | 'photo';
export type AvatarSize = 'l' | 'm' | 's';

export interface AvatarProps {
  type?: AvatarType;
  size?: AvatarSize;
  src?: string;
  alt?: string;
  initials?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Avatar: React.FC<AvatarProps> = ({
  type = 'primary',
  size = 'm',
  src,
  alt = '',
  initials,
  className,
  style,
}) => {
  const classes = [
    'fas-avatar',
    `fas-avatar--${type}`,
    `fas-avatar--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const displayInitials = initials ? initials.slice(0, 2).toUpperCase() : '';

  if (type === 'photo') {
    return (
      <span className={classes} style={style}>
        {src ? (
          <img
            className="fas-avatar__img"
            src={src}
            alt={alt}
          />
        ) : (
          <span className="fas-avatar__placeholder" aria-label={alt} />
        )}
      </span>
    );
  }

  return (
    <span className={classes} style={style} aria-label={alt || displayInitials || undefined}>
      {displayInitials && (
        <span className="fas-avatar__initials">{displayInitials}</span>
      )}
    </span>
  );
};

Avatar.displayName = 'Avatar';
export default Avatar;
