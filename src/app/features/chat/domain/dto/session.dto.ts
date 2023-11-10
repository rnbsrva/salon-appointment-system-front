export interface SessionDto{
    userId: number,
    salons: Array<number>,
    channel: 'staff' | 'user'
}
