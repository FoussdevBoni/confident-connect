import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabAppBar from "./TabAppbar";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../../assets/colors/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = ({ user, components, items }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
        header: () => (
          <TabAppBar user={user} />
        ),
      })}
    >
      {
        items.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              initialParams={{ user: user }}
              options={{
                tabBarLabel: item.name,
                tabBarIcon: ({ color }) => {
                  if (index !== 1) {
                    return (
                      <MaterialIcons name={item.icon} size={26} color={color} />
                    );
                  } else {
                    return (
                      <Ionicons name={item.icon} size={26} color={color} />
                    );
                  }
                },
                headerTitleStyle: {
                  color: 'white',
                  textAlign: 'center',
                  flex: 0,
                },
                headerStyle: {
                  backgroundColor: colors.primary,
                },
              }}
            >
              {props => components[index]}
            </Tab.Screen>
          );
        })
      }
    </Tab.Navigator>
  );
}

export default TabNavigator;
