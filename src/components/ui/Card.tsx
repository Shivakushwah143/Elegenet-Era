import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

interface CardSubComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '', ...props }: CardProps) => {
  return (
    <div
      className={`rounded-lg border border-gray-400  shadow-sm transition-all hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const Header = ({ children, className = '', ...props }: CardSubComponentProps) => {
  return (
    <div className={`border-b   border-gray-100 px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

const Title = ({ children, className = '', ...props }: CardSubComponentProps) => {
  return (
    <h3 className={`text-lg font-semibold text-gray-900 ${className}`} {...props}>
      {children}
    </h3>
  );
};

const Description = ({ children, className = '', ...props }: CardSubComponentProps) => {
  return (
    <p className={`text-sm text-gray-500 ${className}`} {...props}>
      {children}
    </p>
  );
};

const Content = ({ children, className = '', ...props }: CardSubComponentProps) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

const Footer = ({ children, className = '', ...props }: CardSubComponentProps) => {
  return (
    <div className={`border-t border-gray-100 px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Header = Header;
Card.Title = Title;
Card.Description = Description;
Card.Content = Content;
Card.Footer = Footer;

export default Card;