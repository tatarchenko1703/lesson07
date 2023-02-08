export interface IBlog {
    id: number;
    title: string,
    text: string,
    autor: string,
    imgpath: string
}

export interface IBlogRequest {
    title: string,
    text: string,
    autor: string,
    imgpath: string
}

export interface IBlogResponse extends IBlogRequest {
    id: number;
}