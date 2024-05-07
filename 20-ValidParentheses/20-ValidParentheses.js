            stack.push(s[i])
        } else if(s[i]=='}' || s[i]==']' || s[i]==')') {
            if(stack[stack.length - 1]==characters[s[i]]) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length == 0
};
"
