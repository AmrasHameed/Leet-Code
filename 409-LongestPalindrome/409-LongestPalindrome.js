            count += 2;
            set.delete(s[i]);
        } else {
            set.add(s[i]);
        }
    }
    return count + ((set.size > 0) ? 1 : 0);
};
"abccccdd"
"a"
7
1
7
1
"
