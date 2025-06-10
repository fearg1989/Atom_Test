import { db } from '../database/config/firebase';  
import { User } from '../../domain/entities/user.entity';  


export class UserRepository {
  async getUser(email: string): Promise<User | null> {
    const snapshot = await db.collection('users').where('email', '==', email).get();
    if (snapshot.empty) return null;
    return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as User;
  }

  async addUser(email: string): Promise<User> {
    const docRef = await db.collection('users').add({ email });
    return { id: docRef.id, email };
  }
}
