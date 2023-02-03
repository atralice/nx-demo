import * as jwt from 'jsonwebtoken';
import { UnauthorizedError } from './types/Errors';
import { pbkdf2Sync } from 'crypto';

export function generateAccessToken(userId: string, tokenSecret: string) {
  if (!userId || !tokenSecret) throw new Error('Username and tokenSecret are required to generate an access token');
  return jwt.sign({ id: userId }, tokenSecret, { expiresIn: '30d' });
}

const salt = 'ChangeThisToSomethingSecret';

/**
 * This function gets a token and a tokenSecret and returns a promise that resolves to the user ID if the token is valid
 * otherwise it rejects with an Unauthorized error
 * @param token 
 * @param tokenSecret 
 * @returns { id } id of the user
 */
export function authenticateToken(token: string, tokenSecret: string): Promise<string> {
  if (!token || !tokenSecret) throw new Error('Token and tokenSecret are required to authenticate a token');
  return new Promise ((resolve, reject) => {
    console.log(token, tokenSecret);
    jwt.verify(token, tokenSecret, (err: any, user: any) => {
      if (err) return reject(UnauthorizedError('Unauthorized'));
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return resolve(user.id as string);
    });
  });
}

export function hashPassword(password: string) {
  if (!password) throw new Error('Password is required to hash a password');
  return pbkdf2Sync(password, salt,  
    1000, 64, `sha512`).toString(`hex`); 
}

export function comparePasswords(password: string, hash: string) {
  if (!password || !hash) throw new Error('Password and hash are required to compare passwords');
  return pbkdf2Sync(password,  
    salt, 1000, 64, `sha512`).toString(`hex`) == hash;
}
