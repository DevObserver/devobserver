import { Profile as AppleProfile } from 'passport-apple';
import { Profile as GithubProfile } from 'passport-github2';
import { Profile as GoogleProfile } from 'passport-google-oauth20';
import { Profile as TwitterProfile } from 'passport-twitter';

export type Profile = GoogleProfile | AppleProfile | TwitterProfile | GithubProfile;
