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
                UUID.fromString("32792e53-70dc-4b36-bffb-6c6d1fee611a"),
                "dwight.schrute",
                "dwight.jpg-43fd5840-e105-42f8-a833-708cc2ca09e3"));
        USER_PROFILES.add(new UserProfile(
                UUID.fromString("6a825276-e688-493a-9df7-c620c7c3fa6a"),
                "michael.scott",
                "michael.png-618e081c-de44-4016-b1a9-cbd403d118d6"));
        USER_PROFILES.add(new UserProfile(
                UUID.fromString("7136f594-f172-49f3-b607-ff06c8105bf5"),
                "kevin.malone",
                "kevin.jpg-72a8b728-8302-4756-b3fc-9a225e64ba51"));
    }

    public List<UserProfile> getUserProfiles() {
        return USER_PROFILES;
    }
}
