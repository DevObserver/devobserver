import { Profile as AppleProfile } from 'passport-apple';
import { Profile as GithubProfile } from 'passport-github2';
import { Profile as GoogleProfile } from 'passport-google-oauth20';

export type Profile = GoogleProfile | AppleProfile | GithubProfile;
