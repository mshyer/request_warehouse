
CREATE TABLE bin (
  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  bin_url text NOT NULL
);

CREATE TABLE request (
  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  http_method varchar(15),
  content_type text,
  content_length integer,
  user_agent text,
  body JSONB,
  bin_id integer REFERENCES bin(id) ON DELETE CASCADE NOT NULL
);


