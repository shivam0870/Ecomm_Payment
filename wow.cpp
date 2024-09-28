#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(const string& str) {
    int left = 0;
    int right = str.length() - 1;
    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

pair<int, int> removePalindromePrefix(int n, string s) {
    string sb = s;
    int operations = 0;

    while (true) {
        int len = sb.length();
        bool foundPal = false;
        for (int i = 2; i <= len; i++) {
            string prefix = sb.substr(0, i);
            if (isPalindrome(prefix)) {
                sb.erase(0, i);
                operations++;
                foundPal = true;
                break;
            }
        }
        if (!foundPal) {
            break;
        }
    }
    return {operations, sb.length()};
}

int main() {
    int n;
    string s;
    cin >> n >> s;
    
    pair<int, int> ans = removePalindromePrefix(n, s);
    
    cout << ans.first << " " << ans.second << endl;
    
    return 0;
}
