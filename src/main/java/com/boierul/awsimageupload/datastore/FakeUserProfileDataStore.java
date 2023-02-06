package com.boierul.awsimageupload.datastore;

import com.boierul.awsimageupload.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {

    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();

    //   Static inMemory database
    static {
        USER_PROFILES.add(new UserProfile(
                UUID.randomUUID(),
                "danpintea",
                null));
        USER_PROFILES.add(new UserProfile(
                UUID.randomUUID(),
                "kentaromiura",
                null));
    }

    public List<UserProfile> getUserProfiles() {
        return USER_PROFILES;
    }
}
