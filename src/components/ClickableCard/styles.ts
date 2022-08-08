interface CardStyles {
  titleVariant: string;
  color: string;
  padding: number;
  bottom?: number;
  minWidth: number;
  maxWidth: number;
  image: string;
}

const styles: { [name: string]: CardStyles } = {
  core: {
    titleVariant: 'h5',
    color: 'primary.dark',
    padding: 2,
    bottom: 0,
    minWidth: 280,
    maxWidth: 320,
    image: 'assets/images/misc/400x600_fallbackAbairImage.png',
  },
  app: {
    titleVariant: 'h6',
    color: 'secondary.dark',
    padding: 1,
    bottom: undefined,
    minWidth: 160,
    maxWidth: 200,
    image: 'assets/images/misc/400x400_fallbackAbairImage.png',
  },
};

export default styles;
