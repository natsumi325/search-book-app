type TBookData = {
  "GenreInformation": Array<>,
  "Items": Array<TBookItemData>
}

type TBookItemData = {
  "Item": TBookDetailData,
}

// 参考URL: https://webservice.rakuten.co.jp/documentation/books-book-search
type TBookDetailData = {
  "affiliateUrl": string,
  "author": string,
  "authorKana": string,
  "availability": number,
  "booksGenreId": string,
  "chirayomiUrl": string,
  "contents": string,
  "discountPrice": 0, //使用しない
  "discountRate": 0, //使用しない
  "isbn": string,
  "itemCaption": string,
  "itemPrice": number,
  "itemUrl": string,
  "largeImageUrl": string,
  "limitedFlag": 0 | 1,
  "listPrice": 0, //使用しない
  "mediumImageUrl": string,
  "postageFlag": 0 | 1 | 2,
  "publisherName": string,
  "reviewAverage": string,
  "reviewCount": number,
  "salesDate": string,
  "seriesName": string,
  "seriesNameKana": string,
  "size": string,
  "smallImageUrl": string,
  "subTitle": string,
  "subTitleKana": string,
  "title": string,
  "titleKana": string
}