interface User {
	name: string,
	avatar: `img/avatar-${number}.svg`
}
interface PhotoComment {
	id: number,
	message: string,
	name: User['name'],
	avatar: User['avatar']
}

interface Photo {
	id: number,
	url: `photos/${number}.jpg`,
	description: string,
	likes: number,
	comments: PhotoComment[]
}

export type {User, PhotoComment, Photo};


