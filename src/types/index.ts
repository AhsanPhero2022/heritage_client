export type PropertyProps = {
  _id: string;
  id: number;
  image: string;
  name: string;
  location: string;
  price: number;
  userId?: string;
};

export type InputsProps = {
  name: string;
  location: string;
  price: string;
  image: string;
};

export type TestimonialsInputsProps = {
  name: string;
  src: string;
  title: string;
  description: string;
};

export type TData = {
  name: string;
  _id: string;
  image: string;
  location: string;
  price: number;
};

export type TTestimonial = {
  _id: number;
  src: string;
  alt: string;
  name: string;
  title: string;
  description: string;
};
export type TPropertyProps = {
  _id: string;
  userId: string;
  name: string;
  location: string;
  price: number;
  image: string;
};
