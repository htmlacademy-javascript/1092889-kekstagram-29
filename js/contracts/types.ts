interface User {
	name: string,
	avatar: `img/avatar-${number}.svg`,
	surname: string
}
interface PhotoComment extends Omit<User, 'surname'>{
	id: number,
	message: string,
}

interface Photo {
	id: number,
	url: `photos/${number}.jpg`,
	description: string,
	likes: number,
	comments: PhotoComment[]
}

export type {User, PhotoComment, Photo};


