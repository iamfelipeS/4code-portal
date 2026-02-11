// import { Injectable, computed, signal } from '@angular/core';
// // import type { AuthSession } from '../../domain/ports/auth.port';

// @Injectable({ providedIn: 'root' })
// export class SessionStore {
//   private _session = signal<AuthSession | null>(null);

//   session = computed(() => this._session());
//   isLoggedIn = computed(() => !!this._session());

//   setSession(session: AuthSession) {
//     this._session.set(session);
//   }

//   clear() {
//     this._session.set(null);
//   }
// }
