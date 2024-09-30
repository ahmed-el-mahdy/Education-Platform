const request = require('supertest');
const app = require('../server');

describe('API Endpoints', () => {
    describe('GET /', () => {
        it('responds with json', async () => {
            const res = await request(app).get('/');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('message');
        });
    });

    // Additional tests for other endpoints
    describe('GET /api/courses', () => {
        it('responds with an array of courses', async () => {
            const res = await request(app).get('/api/courses');
            expect(res.statusCode).toEqual(200);
            expect(Array.isArray(res.body)).toBeTruthy();
        });
    });

    // Add more tests as needed for other functionalities
});
