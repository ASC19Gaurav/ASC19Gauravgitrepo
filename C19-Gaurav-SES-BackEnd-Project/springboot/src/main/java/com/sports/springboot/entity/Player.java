package com.sports.springboot.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Players")
public class Player {

    @Id
    private String id;


    private String playerName;


    private int playerAge;

    @Column(name = "player_phone")
    private String playerPhone;





    private String teamName;

    public Player() {}

    public Player(String id,String playerName, int playerAge, String playerPhone, String teamName) {
        this.id = id;
        this.playerName = playerName;
        this.playerAge = playerAge;
        this.playerPhone = playerPhone;

        this.teamName = teamName;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public int getPlayerAge() {
        return playerAge;
    }

    public void setPlayerAge(int playerAge) {
        this.playerAge = playerAge;
    }

    public String getPlayerPhone() {
        return playerPhone;
    }

    public void setPlayerPhone(String playerPhone) {
        this.playerPhone = playerPhone;
    }



    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }
}
