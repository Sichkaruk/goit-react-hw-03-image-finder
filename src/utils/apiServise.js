class PixabayApiServise {
  constructor() {
    this.sQuery = "";
    this.pageNum = 1;
    this.perPage = 12;
    this.API_KEY = "24337866-3ce9a262db7185840eb7af7ea";
  }

  fetchImages = async () => {
    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.sQuery}&page=${this.pageNum}&per_page=${this.perPage}&key=${this.API_KEY}`;
    const response = await fetch(URL);
    const data = response.json();
    this.incrementPage();
    return data;
  };

  incrementPage() {
    this.pageNum += 1;
  }

  resetPage() {
    this.pageNum = 1;
  }

  get query() {
    return this.sQuery;
  }

  set query(newQuery) {
    return (this.sQuery = newQuery);
  }

  get page() {
    return this.pageNum;
  }

  set page(newPage) {
    return (this.perPage = newPage);
  }

  get pPage() {
    return this.perPage;
  }

  set pPage(newPerPage) {
    return (this.perPage = newPerPage);
  }
}

export default PixabayApiServise;
