const styles: { [name: string]: AbClickableCardStyles } = {
  main: {
    titleVariant: 'h6',
    color: 'gray',
    padding: 2,
    bottom: 0,
    width: 390,
    height: 260,
    image: 'assets/images/misc/400x600_fallbackAbairImage.jpg',
  },
  app: {
    titleVariant: 'h6',
    color: 'info.main',
    padding: 1,
    bottom: undefined,
    width: 276,
    height: 184,
    image: 'assets/images/misc/400x400_fallbackAbairImage.jpg',
  },
};

interface AbClickableCardStyles {
  titleVariant: 'h5' | 'h6';
  color: string;
  padding: number;
  bottom?: number;
  width: number;
  height: number;
  image: string;
}

interface AbClickableCardProps {
  image?: string;
  title?: string;
  description?: string;
  handleClickEvent?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variation: 'main' | 'app' | 'sCapp';
}

export type { AbClickableCardStyles, AbClickableCardProps };

export default styles;
