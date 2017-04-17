import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let vhses = [
      {id: 1, name: 'Pulp fiction', rented:0, year: 1999, urlJpeg: "https://pmd205465tn-a.akamaihd.net/Miramax/279/95/hiamxwYTqGi5jcQNYzQwZxZRYqvKxtw5_h264_3800_640x360_352124483894.jpg"},
      {id: 2, name: 'The Green Mile',rented:0, year: 1998, urlJpeg: "http://images.contentful.com/7h71s48744nc/4HxC7oQjxYkgS6kIWOiOKa/99d0b5014755a6e38eaa73ec3c5bed70/the-green-mile.jpg"},
      {id: 3, name: 'Forrest Gump',rented:0, year: 1997 , urlJpeg:"http://images.contentful.com/7h71s48744nc/ttbuWX4JtsGcpN25BIz41u/d6eb57c5801370b80e356e06f297f1af/Forrest-Gump-large.jpg"},
      {id: 4, name: 'The Shawshank',rented:1, year: 1995, urlJpeg:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/09/09/ShawshankRedempt_184Pyxurz.jpg"},
      {id: 5, name: 'The Matrix',rented:0, year: 1995, urlJpeg:"https://2.bp.blogspot.com/-2mxHUrtNNQI/VvCP1V94pNI/AAAAAAAAEqw/h9IWBjCeMowykzM8uXWWoOb3BymaZNTIQ/s1600/matrix-600x400.jpg"},
      {id: 6, name: 'Léon',rented:0, year: 1993, urlJpeg:"https://i.ytimg.com/vi/Dc1KzpMnuX0/maxresdefault.jpg"},
      {id: 7, name: 'Avatar',rented:0, year: 1991, urlJpeg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhzgsFStqp1pkxWCsJweMsL6l0xWc_WGhwRfnJY7pnEkeSlsVv"},
      {id: 8, name: 'Gladiator',rented:0, year: 1970, urlJpeg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5x1z5nRi5D273KnUv7ZjzVcCt97f-HfJSt4jpbJtKKvrGygJ1"}
    ];
    return {vhses};
  }
}
