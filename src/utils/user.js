import { Status } from "@/constants";

export const mapUserData = users =>
  users
    .reduce(
      (result, user) => {
        // const { userName, userId, role, status } = user;

        if (
          user.status === Status.OFFLINE ||
          user.status === Status.INVISIBLE
        ) {
          const statusGroup = result.find(
            group => group.name === Status.OFFLINE
          );
          statusGroup.users.push(user);
          return result;
        }
        if (!user.role) {
          const statusGroup = result.find(
            group => group.name === Status.ONLINE
          );
          statusGroup.users.push(user);
          return result;
        }

        let roleGroup = result.find(group => group.name === user.role);

        if (!roleGroup) {
          result.push({ name: user.role, users: [] });
          roleGroup = result.find(group => group.name === user.role);
        }

        if (roleGroup) {
          roleGroup.users.push(user);
        }

        return result;
      },
      [
        { name: Status.OFFLINE, users: [] },
        { name: Status.ONLINE, users: [] },
      ]
    )
    .reverse();
