import { connect } from 'mongoose';

export function connectDB(): void {
    connect(
        `mongodb://${process.env.DB_HOST || 'localhost'}:27017/${process.env.DB}`,
        { useUnifiedTopology: true, useNewUrlParser: true },
        (error) => {
            if (error) {
                console.error('mongodb connection error', error);
            } else {
                console.log('mongodb connected');
            }
        });
}