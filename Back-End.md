Domain Adresi: https://mylinkhub-fe.vercel.app/api/v1

Github Adresi: https://github.com/merve824/mylinkhub-be

Docker: Kullanıldı

REST API: Kullanıldı

Redis:Kullanıldı

## MERVE SÜRÜCÜ BACKEND

1. **Eposta ile kayıt olma** <br>
   HTTP Method: `POST` <br>
   Endpoint: `/auth/register` <br>
   **İstek Body'si**

    ```json
    {
        "email": "test@gmail.com",
        "password": "Test.123"
    }
    ```

2. **Telefon numarası ile kayıt olma** <br>
   HTTP Method: `POST` <br>
   Endpoint: `/auth/register` <br>
   **İstek Body'si**

    ```json
    {
        "phone": "05050124578",
        "password": "Test.123"
    }
    ```

3. **Email ile OTP doğrulama** <br>
   HTTP Method: `POST` <br>
   Endpoint: `/auth/verify-otp` <br>
   **İstek Body'si**

    ```json
    {
        "email": "test@gmail.com",
        "otp": "540004"
    }
    ```

4. **Süresi dolan kayıt olma OTP'si için yeni OTP oluşturma** <br>
   HTTP Method: `POST` <br>
   Endpoint: `/auth/resend-register-otp` <br>
   **İstek Body'si**

    ```json
    {
        "email": "test@gmail.com"
    }
    ```

5. **Eposta ile giriş yapma** <br>
   HTTP Method: `POST` <br>
   Endpoint: `/auth/login` <br>
   **İstek Body'si**

    ```json
    {
        "email": "test@gmail.com",
        "password": "Test.123"
    }
    ```

6. **Telefon numarası ile giriş yapma** <br>
   HTTP Method: `POST` <br>
   Endpoint: `/auth/login` <br>
   **İstek Body'si**

    ```json
    {
        "phone": "05050124578",
        "password": "Test.123"
    }
    ```

7. **Profil oluşturma öncesi kullanıcı adı seçme** <br>
   HTTP Method: `POST` <br>
   Endpoint: `/user/pre-choose-username` <br>
   Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>
   **İstek Body'si**

    ```json
    {
        "email": "test@gmail.com",
        "username": "merve"
    }
    ```

8. **Profil oluşturma** <br>
   HTTP Method: `POST` <br>
   Endpoint: `/user/create-profile` <br>
   Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>
   **İstek Body'si**

    ```json
    {
        "username": "merve",
        "email": "test@gmail.com",
        "avatarUrl": "https://i.ibb.co/SdN3YFJ/fish.jpg",
        "socialLinks": {
            "github": "https://github.com/merve824"
        },
        "backgroundColor": "#ffffff",
        "font": "DM Sans",
        "fullname": "merve sürücü",
        "bio": "blabla"
    }
    ```

9. **Giriş yapan kullanıcının kullanıcı adını alma** <br>
   HTTP Method: `GET` <br>
   Endpoint: `/user/username` <br>
   Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>

10. **Kullanıcı adı seçme** <br>
    HTTP Method: `POST` <br>
    Endpoint: `/user/choose-username` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>
    **İstek Body'si**

    ```json
    {
        "username": "merve"
    }
    ```

11. **Kullanıcı adına göre profil bilgileri getirme** <br>
    HTTP Method: `GET` <br>
    Endpoint: `/user/profile/:username` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>
    **İstek Query**

    ```json
    /user/profile/merve
    ```

12. **Giriş yapan kullanıcının bilgilerini getirme** <br>
    HTTP Method: `GET` <br>
    Endpoint: `/user/account-details` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>

13. **Profil bilgileri güncelleme** <br>
    HTTP Method: `PUT` <br>
    Endpoint: `/user/update-profile` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>
    **İstek Body'si**

    ```json
    {
        "fullname": "merve sürücü",
        "bio": "blablabla",
        "location": "Isparta, Türkiye",
        "avatarUrl": "https://i.ibb.co/LpPySrp/IMG-20240526-WA0007-removebg-preview.png",
        "headerUrl": "https://i.ibb.co/nsSRDdQc/coding.jpg"
    }
    ```

14. **Sosyal medya bağlantısı ekleme** <br>
    HTTP Method: `POST` <br>
    Endpoint: `/user/social-links` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>
    **İstek Body'si**

    ```json
    {
        "key": "youtube",
        "value": "https://www.youtube.com/"
    }
    ```

15. **Sosyal medya bağlantısı güncelleme** <br>
    HTTP Method: `PUT` <br>
    Endpoint: `/user/social-links` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>
    **İstek Body'si**

    ```json
    {
        "key": "youtube",
        "value": "https://www.youtube.com/"
    }
    ```

16. **Sosyal medya bağlantısı silme** <br>
    HTTP Method: `DELETE` <br>
    Endpoint: `/user/social-links/:key` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>
    **İstek Query**

    ```json
    /user/social-link/youtube
    ```

17. **Giriş yapan kullanıcının sosyal medya bağlantı bilgilerini getirme** <br>
    HTTP Method: `GET` <br>
    Endpoint: `/user/social-links` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>

18. **Toplu sosyal medya bağlantısı güncelleme** <br>
    HTTP Method: `PUT` <br>
    Endpoint: `/user/update-social-links` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>
    **İstek Body'si**

    ```json
    {
        "facebook": "",
        "github": "",
        "instagram": "",
        "kick": "",
        "linkedin": "",
        "patreon": "",
        "personal": "https://mylinkhub-fe.vercel.app/",
        "pinterest": "",
        "reddit": "",
        "snapchat": "",
        "spotify": "",
        "tiktok": "",
        "twitch": "",
        "x": "",
        "youtube": ""
    }
    ```

19. **Özel bağlantı oluşturma** <br>
    HTTP Method: `POST` <br>
    Endpoint: `/user/custom-links` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>
    **İstek Body'si**

    ```json
    {
        "title": "test",
        "description": "description",
        "imageUrl": "https://avatars.githubusercontent.com/u/97638419?v=4",
        "url": "https://github.com/merve824"
    }
    ```

20. **Giriş yapan kullanıcının özel bağlantılarını getirme** <br>
    HTTP Method: `GET` <br>
    Endpoint: `/user/custom-links` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>

21. **Özel bağlantı güncelleme** <br>
    HTTP Method: `PUT` <br>
    Endpoint: `/user/custom-links` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>
    **İstek Body'si**

    ```json
    {
        "title": "test güncel",
        "description": "test açıklama",
        "url": "https://www.youtube.com/watch?v=ZHgyQGoeaB0",
        "imageUrl": "https://i.ibb.co/Fk1cMN3D/5f6bec3b7a22.jpg",
        "id": "687d6b15e448b868edbcef22"
    }
    ```

22. **Özel bağlantı silme** <br>
    HTTP Method: `DELETE` <br>
    Endpoint: `/user/custom-links/:customLinkId` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>
    **İstek Query**

    ```json
    /user/custom-links/687d6b15e448b868edbcef22
    ```

23. **Profil arka plan rengi güncelleme** <br>
    HTTP Method: `PUT` <br>
    Endpoint: `/user/background-color` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>
    **İstek Body'si**

    ```json
    {
        "backgroundColor": "#adadad"
    }
    ```

24. **Profil yazı tipi güncelleme** <br>
    HTTP Method: `PUT` <br>
    Endpoint: `/user/font` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>
    **İstek Body'si**

    ```json
    {
        "font": "DM Sans"
    }
    ```

25. **Hesap dondurma** <br>
    HTTP Method: `PUT` <br>
    Endpoint: `/user/frozen` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>

26. **Hesap silme** <br>
    HTTP Method: `DELETE` <br>
    Endpoint: `/user/account` <br>
    Yetkilendirme: Bu endpoint, `Authorization` başlığında Bearer token ile çağrılmalıdır. <br>

27. **Redis test** <br>
    HTTP Method: `GET` <br>
    Endpoint: `/redis/:username` <br>
    **İstek Query**

    ```json
    /redis/merve
    ```
