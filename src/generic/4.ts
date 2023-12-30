/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Prors {
  title: string;
}

class Component<T>{
  constructor (public props:T) {

  }
}

class Page extends Component <Prors>{
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};