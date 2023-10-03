import { Status } from "@/constants";

export const mapUserData = (users) =>
  users
    .reduce(
      (result, user) => {
        const { userName, userId, role, status } = user;

        if (status === Status.OFFLINE || status === Status.INVISIBLE) {
          const statusGroup = result.find(
            (group) => group.name === Status.OFFLINE
          );
          statusGroup.users.push({ userName, userId, role, status });
          return result;
        }
        if (!role) {
          const statusGroup = result.find(
            (group) => group.name === Status.ONLINE
          );
          statusGroup.users.push({ userName, userId, role, status });
          return result;
        }

        let roleGroup = result.find((group) => group.name === role);

        if (!roleGroup) {
          result.push({ name: role, users: [] });
          roleGroup = result.find((group) => group.name === role);
        }

        if (roleGroup) {
          roleGroup.users.push({ userName, userId, role, status });
        }

        return result;
      },
      [
        { name: Status.OFFLINE, users: [] },
        { name: Status.ONLINE, users: [] },
      ]
    )
    .reverse();
