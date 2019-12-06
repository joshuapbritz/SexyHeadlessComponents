import React, { useState, FC } from 'react';
import styles from './button.module.scss';

function getClass(input: boolean) {
  const key = input ? 'loads' : 'clicks';
  return styles[key];
}

interface Arguments {
  isLoading: boolean;
  toggleIsLoading(): void;
  themeName: string;
  updateTheme(input: string): void;
}

const Button = (props: {
  children: (args: Arguments) => JSX.Element;
  loading?: boolean;
  theme?: string;
}) => {
  const [isLoading, setIsLoading] = useState(props.loading || false);
  const [themeName, setThemeName] = useState(props.theme || 'none');

  if (!props.children || typeof props.children !== 'function') return null;

  return props.children({
    isLoading,
    toggleIsLoading: () => setIsLoading(!isLoading),
    themeName,
    updateTheme: (name: string) => setThemeName(name),
  });
};

const PrimaryButton: FC = ({ children }) => {
  return (
    <Button loading={true}>
      {({ isLoading, toggleIsLoading }) => (
        <button
          onClick={() => toggleIsLoading()}
          className={`${styles.button} ${styles.primary} ${getClass(
            isLoading
          )}`}
        >
          {children}
        </button>
      )}
    </Button>
  );
};

const AccentButton: FC = ({ children }) => (
  <Button loading={false}>
    {({ isLoading, toggleIsLoading }) => (
      <button
        onClick={() => toggleIsLoading()}
        className={`${styles.button} ${styles.accent} ${getClass(isLoading)}`}
      >
        {children}
      </button>
    )}
  </Button>
);

const SubtleButton: FC = ({ children }) => (
  <Button loading={true}>
    {({ isLoading, toggleIsLoading }) => (
      <button
        onClick={() => toggleIsLoading()}
        className={`${styles.button} ${styles.subtle} ${getClass(isLoading)}`}
      >
        {children}
      </button>
    )}
  </Button>
);

export default Button;
export { PrimaryButton, AccentButton, SubtleButton };
