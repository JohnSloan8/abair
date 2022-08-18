interface CardStyles {
  titleVariant: 'h5' | 'h6';
  color: string;
  padding: number;
  bottom?: number;
  minWidth: number;
  maxWidth: number;
  image: string;
}

const styles: { [name: string]: CardStyles } = {
  main: {
    titleVariant: 'h6',
    color: 'gray',
    padding: 2,
    bottom: 0,
    minWidth: 280,
    maxWidth: 280,
    image: 'assets/images/misc/400x600_fallbackAbairImage.jpg',
  },
  app: {
    titleVariant: 'h6',
    color: 'gray',
    padding: 1,
    bottom: undefined,
    minWidth: 120,
    maxWidth: 164,
    image: 'assets/images/misc/400x400_fallbackAbairImage.jpg',
  },
};

export default styles;
