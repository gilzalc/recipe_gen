import {useAuth} from "../contexts/AuthContext";

export default class Member {

    constructor(name = "", avatar = -1, recipesNum = 0, key = 0, favourites = new Set([])) {
        this.name = name;
        this.avatar = avatar;
        this.recipesNum = recipesNum;
        this.key = key;
        this.favourites = favourites
    }


    addFavouriteToArray(recipeKey, removeFlag = false) {
        if (!removeFlag) {
            this.favourites.add(recipeKey);
            return this;
        }
        else{
            this.favourites.delete(recipeKey);
            }
            return this;
        }


    //Setters
    setName(name) {
        this.name = name;
    }


    setAvatar(avatar) {
        this.avatar = avatar;
    }

    //Getters
    getName() {
        return this.name;
    }

    getAvatarIndex() {
        return this.avatar;
    }

    setMemberkey(key) {
        this.key = key;
    }

    getMemberKey() {
        return this.key;
    }

    getFavourites() {
        if(!this.favourites) {return}
        return this.favourites;
    }

}

/**
 * Converts member to or from firestore
 * @type {{toFirestore: (function(*): {name: *, avatar: *}), fromFirestore: (function(*): Member)}}
 */
export const memberConverter = {
    toFirestore: function (member) {
        return {
            name: member.name,
            avatar: member.avatar,
            recipesNum: member.recipesNum,
            key: member.key,
            favourites: Array.from(member.favourites)
        };
    },


    fromFirestore: function (member) {
        return new Member(member.name, member.avatar, member.recipesNum, member.key, new Set(member.favourites));
    }

};

// export function getMemberNames() {
//     let {members} = useAuth();
//     const memberNames = [];
//     for (const member of {members}.members) {
//         memberNames.push(member.getName());
//     }
//     return memberNames;
// }

// export function getAllMembers() {
//     let {members} = useAuth();
// const membersArr = [];
// for (const member of {members}.members) {
//     membersArr.push(member.getName());
// }
// return membersArr;
// };
//
// export function getNameByKey (key) {
//     return getAllMembers()[key];
// }
//
//
