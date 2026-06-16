package com.contactmanagement.contact_management.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

        @Value("${jwt.secret:1234567890123456789012345678901234567890123456789012345678901234}")
        private String SECRET_KEY;

        public String generateToken(String username) {
                Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));

                return Jwts.builder()
                                .setSubject(username)
                                .setIssuedAt(new Date())
                                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                                .signWith(key, SignatureAlgorithm.HS256)
                                .compact();
        }

        public String extractUsername(String token) {

                Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));

                Claims claims = Jwts.parserBuilder()
                                .setSigningKey(key)
                                .build()
                                .parseClaimsJws(token)
                                .getBody();

                return claims.getSubject();
        }

        public boolean validateToken(String token, String username) {

                String extractedUsername = extractUsername(token);

                return extractedUsername.equals(username);
        }
}