export interface AuthDto{
    token: string;
    expiresIn: number;
    refreshToken: string;
    refreshTokenExpiresIn: number;
    scope: string;
    sessionScope: string;
    tokenType: string;
}