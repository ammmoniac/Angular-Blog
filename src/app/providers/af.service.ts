import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/compat/auth";
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase/auth';
import { User } from './user';
import { switchMap } from "rxjs/operators";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AfService {
  user$: Observable<User | null | undefined>;

  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore
  ) {
    this.user$ = afAuth.authState.pipe(switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      }else {
        return of(null);
      }
    }))
  }

  loginWithGoogle() {
    const provider = new firebase.GoogleAuthProvider();
    this.afAuth.signInWithPopup(provider).then((credential) => {
      this.updateUser(credential.user);
    })
  }

  updateUser(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc<User>(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        subscriber: true,
        admin: false
      },
    }
    return userRef.set(data, {merge: true})

  }

  logout() {
    this.afAuth.signOut();
  }
}
