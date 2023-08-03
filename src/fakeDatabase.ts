export interface IChallenge {
    id: number;
    name: string;
    price: number;
    image: string
  }
  
  export const fakeDatabase = {
    challenges: [
      {
        id: 1,
        Image: "http://intocode.ru/d/react-project-1/images/1.jpg",
        title: 'macbok' ,
        price: 2500,
      },
      {
        id: 2,
        Image: "http://intocode.ru/d/react-project-1/images/1.jpg",
        title: "macbok",
        price: 1300
      },
      {
        id: 3,
        Image: "http://intocode.ru/d/react-project-1/images/1.jpg",
        title: 'macbok',
        price: 3500
      },
      {
        id: 4,
        Image: "http://intocode.ru/d/react-project-1/images/1.jpg",
        title: "samsung",
        price: 2500
      },
      {
        id: 4,
        Image: "http://intocode.ru/d/react-project-1/images/1.jpg",
        title: "iphone",
        price: 2500
      },
      {
        id: 4,
        Image: "http://intocode.ru/d/react-project-1/images/1.jpg",
        title: "macbok",
        price: 2500
      },
    ],
  };
  