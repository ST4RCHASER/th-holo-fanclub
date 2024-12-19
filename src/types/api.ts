export type BaseEntity = {
    id: string;
    createdAt: number;
};

export type Entity<T> = {
    [K in keyof T]: T[K];
} & BaseEntity;

export type Meta = {
    page: number;
    total: number;
    totalPages: number;
};

export type AuthResponse = {
    jwt: string;
    user: User;
};

export type User = Entity<{
    username: string;
    role: 'ADMIN' | 'USER';
}>;